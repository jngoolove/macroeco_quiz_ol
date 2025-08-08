export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      alembic_version: {
        Row: {
          created_at: string
          updated_at: string
          version_num: string
        }
        Insert: {
          created_at?: string
          updated_at?: string
          version_num: string
        }
        Update: {
          created_at?: string
          updated_at?: string
          version_num?: string
        }
        Relationships: []
      }
      clerk_users: {
        Row: {
          clerk_id: string
          created_at: string | null
          email: string | null
          id: number | null
          name: string | null
          updated_at: string
        }
        Insert: {
          clerk_id: string
          created_at?: string | null
          email?: string | null
          id?: number | null
          name?: string | null
          updated_at?: string
        }
        Update: {
          clerk_id?: string
          created_at?: string | null
          email?: string | null
          id?: number | null
          name?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      collection: {
        Row: {
          created_at: string
          description: string | null
          id: number
          name: string | null
          updated_at: string
          user_id: number | null
        }
        Insert: {
          created_at: string
          description?: string | null
          id?: number
          name?: string | null
          updated_at: string
          user_id?: number | null
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: number
          name?: string | null
          updated_at?: string
          user_id?: number | null
        }
        Relationships: []
      }
      collection_question: {
        Row: {
          collection_id: number
          created_at: string
          question_id: number
          seq_no: number | null
          updated_at: string
        }
        Insert: {
          collection_id: number
          created_at?: string
          question_id: number
          seq_no?: number | null
          updated_at?: string
        }
        Update: {
          collection_id?: number
          created_at?: string
          question_id?: number
          seq_no?: number | null
          updated_at?: string
        }
        Relationships: []
      }
      competition: {
        Row: {
          code: string
          competition_type: string | null
          created_at: string | null
          description: string | null
          difficulty_level: string | null
          end_year: number | null
          id: number
          name: string
          organization: string | null
          start_year: number | null
          updated_at: string | null
        }
        Insert: {
          code: string
          competition_type?: string | null
          created_at?: string | null
          description?: string | null
          difficulty_level?: string | null
          end_year?: number | null
          id?: number
          name: string
          organization?: string | null
          start_year?: number | null
          updated_at?: string | null
        }
        Update: {
          code?: string
          competition_type?: string | null
          created_at?: string | null
          description?: string | null
          difficulty_level?: string | null
          end_year?: number | null
          id?: number
          name?: string
          organization?: string | null
          start_year?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      competition_paper: {
        Row: {
          competition_id: number
          created_at: string | null
          id: number
          pdf_page_count: number | null
          pdf_size_bytes: number | null
          pdf_upload_date: string | null
          s3_pdf_key: string | null
          session: string | null
          updated_at: string | null
          year: number
        }
        Insert: {
          competition_id: number
          created_at?: string | null
          id?: number
          pdf_page_count?: number | null
          pdf_size_bytes?: number | null
          pdf_upload_date?: string | null
          s3_pdf_key?: string | null
          session?: string | null
          updated_at?: string | null
          year: number
        }
        Update: {
          competition_id?: number
          created_at?: string | null
          id?: number
          pdf_page_count?: number | null
          pdf_size_bytes?: number | null
          pdf_upload_date?: string | null
          s3_pdf_key?: string | null
          session?: string | null
          updated_at?: string | null
          year?: number
        }
        Relationships: [
          {
            foreignKeyName: "competition_paper_competition_id_fkey"
            columns: ["competition_id"]
            isOneToOne: false
            referencedRelation: "competition"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "competition_paper_competition_id_fkey"
            columns: ["competition_id"]
            isOneToOne: false
            referencedRelation: "competition_question_details"
            referencedColumns: ["competition_id"]
          },
        ]
      }
      competition_question: {
        Row: {
          competition_id: number
          created_at: string | null
          difficulty_rating: number | null
          id: number
          points: number | null
          problem_number: number | null
          question_id: number
          session: string | null
          source_url: string | null
          topic_id: number
          updated_at: string | null
          year: number
        }
        Insert: {
          competition_id: number
          created_at?: string | null
          difficulty_rating?: number | null
          id?: number
          points?: number | null
          problem_number?: number | null
          question_id: number
          session?: string | null
          source_url?: string | null
          topic_id: number
          updated_at?: string | null
          year: number
        }
        Update: {
          competition_id?: number
          created_at?: string | null
          difficulty_rating?: number | null
          id?: number
          points?: number | null
          problem_number?: number | null
          question_id?: number
          session?: string | null
          source_url?: string | null
          topic_id?: number
          updated_at?: string | null
          year?: number
        }
        Relationships: [
          {
            foreignKeyName: "competition_question_competition_id_fkey"
            columns: ["competition_id"]
            isOneToOne: false
            referencedRelation: "competition"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "competition_question_competition_id_fkey"
            columns: ["competition_id"]
            isOneToOne: false
            referencedRelation: "competition_question_details"
            referencedColumns: ["competition_id"]
          },
          {
            foreignKeyName: "competition_question_question_id_fkey"
            columns: ["question_id"]
            isOneToOne: false
            referencedRelation: "question"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "competition_question_topic_id_fkey"
            columns: ["topic_id"]
            isOneToOne: false
            referencedRelation: "competition_question_details"
            referencedColumns: ["topic_id"]
          },
          {
            foreignKeyName: "competition_question_topic_id_fkey"
            columns: ["topic_id"]
            isOneToOne: false
            referencedRelation: "competition_topic"
            referencedColumns: ["id"]
          },
        ]
      }
      competition_topic: {
        Row: {
          category: string
          created_at: string | null
          description: string | null
          id: number
          level: string
          name: string
          sort_order: number | null
          updated_at: string | null
        }
        Insert: {
          category: string
          created_at?: string | null
          description?: string | null
          id?: number
          level: string
          name: string
          sort_order?: number | null
          updated_at?: string | null
        }
        Update: {
          category?: string
          created_at?: string | null
          description?: string | null
          id?: number
          level?: string
          name?: string
          sort_order?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      competition_topic_map: {
        Row: {
          avg_difficulty: number | null
          competition_id: number
          last_updated: string | null
          question_count: number | null
          topic_id: number
        }
        Insert: {
          avg_difficulty?: number | null
          competition_id: number
          last_updated?: string | null
          question_count?: number | null
          topic_id: number
        }
        Update: {
          avg_difficulty?: number | null
          competition_id?: number
          last_updated?: string | null
          question_count?: number | null
          topic_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "competition_topic_map_competition_id_fkey"
            columns: ["competition_id"]
            isOneToOne: false
            referencedRelation: "competition"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "competition_topic_map_competition_id_fkey"
            columns: ["competition_id"]
            isOneToOne: false
            referencedRelation: "competition_question_details"
            referencedColumns: ["competition_id"]
          },
          {
            foreignKeyName: "competition_topic_map_topic_id_fkey"
            columns: ["topic_id"]
            isOneToOne: false
            referencedRelation: "competition_question_details"
            referencedColumns: ["topic_id"]
          },
          {
            foreignKeyName: "competition_topic_map_topic_id_fkey"
            columns: ["topic_id"]
            isOneToOne: false
            referencedRelation: "competition_topic"
            referencedColumns: ["id"]
          },
        ]
      }
      course: {
        Row: {
          code: string | null
          created_at: string
          curriculum_id: number | null
          id: number
          name: string | null
          price_cents: number | null
          updated_at: string
        }
        Insert: {
          code?: string | null
          created_at: string
          curriculum_id?: number | null
          id?: number
          name?: string | null
          price_cents?: number | null
          updated_at: string
        }
        Update: {
          code?: string | null
          created_at?: string
          curriculum_id?: number | null
          id?: number
          name?: string | null
          price_cents?: number | null
          updated_at?: string
        }
        Relationships: []
      }
      course_material: {
        Row: {
          cos_key: string | null
          course_id: number | null
          created_at: string
          id: number
          is_paid_only: number | null
          title: string | null
          updated_at: string
        }
        Insert: {
          cos_key?: string | null
          course_id?: number | null
          created_at: string
          id?: number
          is_paid_only?: number | null
          title?: string | null
          updated_at: string
        }
        Update: {
          cos_key?: string | null
          course_id?: number | null
          created_at?: string
          id?: number
          is_paid_only?: number | null
          title?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      curriculum: {
        Row: {
          created_at: string
          description: string | null
          id: number
          name: string | null
          updated_at: string
        }
        Insert: {
          created_at: string
          description?: string | null
          id?: number
          name?: string | null
          updated_at: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: number
          name?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      db_version: {
        Row: {
          backup_file: string | null
          created_at: string | null
          description: string | null
          id: number | null
          updated_at: string
          version_name: string | null
        }
        Insert: {
          backup_file?: string | null
          created_at?: string | null
          description?: string | null
          id?: number | null
          updated_at?: string
          version_name?: string | null
        }
        Update: {
          backup_file?: string | null
          created_at?: string | null
          description?: string | null
          id?: number | null
          updated_at?: string
          version_name?: string | null
        }
        Relationships: []
      }
      favorite: {
        Row: {
          created_at: string
          question_id: number
          updated_at: string
          user_id: number
        }
        Insert: {
          created_at?: string
          question_id: number
          updated_at?: string
          user_id: number
        }
        Update: {
          created_at?: string
          question_id?: number
          updated_at?: string
          user_id?: number
        }
        Relationships: []
      }
      generated_pdf: {
        Row: {
          collection_id: number | null
          cos_key: string | null
          created_at: string
          display_name: string | null
          id: number
          source: Database["public"]["Enums"]["genpdf_source"] | null
          updated_at: string
          user_id: number | null
        }
        Insert: {
          collection_id?: number | null
          cos_key?: string | null
          created_at: string
          display_name?: string | null
          id?: number
          source?: Database["public"]["Enums"]["genpdf_source"] | null
          updated_at: string
          user_id?: number | null
        }
        Update: {
          collection_id?: number | null
          cos_key?: string | null
          created_at?: string
          display_name?: string | null
          id?: number
          source?: Database["public"]["Enums"]["genpdf_source"] | null
          updated_at?: string
          user_id?: number | null
        }
        Relationships: []
      }
      institution: {
        Row: {
          brand_domain: string | null
          created_at: string
          id: number
          logo_url: string | null
          name: string | null
          updated_at: string
        }
        Insert: {
          brand_domain?: string | null
          created_at: string
          id?: number
          logo_url?: string | null
          name?: string | null
          updated_at: string
        }
        Update: {
          brand_domain?: string | null
          created_at?: string
          id?: number
          logo_url?: string | null
          name?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      institution_course_access: {
        Row: {
          course_id: number
          created_at: string
          granted_at: string | null
          institution_id: number
          updated_at: string
        }
        Insert: {
          course_id: number
          created_at?: string
          granted_at?: string | null
          institution_id: number
          updated_at?: string
        }
        Update: {
          course_id?: number
          created_at?: string
          granted_at?: string | null
          institution_id?: number
          updated_at?: string
        }
        Relationships: []
      }
      processing_queue: {
        Row: {
          created_at: string
          dead_letter: boolean | null
          error_message: string | null
          id: number
          item_id: string
          item_type: string
          last_attempt: string | null
          max_retries: number | null
          priority: number | null
          queue_name: string
          retry_count: number | null
          scheduled_for: string | null
          status: Database["public"]["Enums"]["jobstatus"]
          updated_at: string
        }
        Insert: {
          created_at: string
          dead_letter?: boolean | null
          error_message?: string | null
          id?: number
          item_id: string
          item_type: string
          last_attempt?: string | null
          max_retries?: number | null
          priority?: number | null
          queue_name: string
          retry_count?: number | null
          scheduled_for?: string | null
          status?: Database["public"]["Enums"]["jobstatus"]
          updated_at: string
        }
        Update: {
          created_at?: string
          dead_letter?: boolean | null
          error_message?: string | null
          id?: number
          item_id?: string
          item_type?: string
          last_attempt?: string | null
          max_retries?: number | null
          priority?: number | null
          queue_name?: string
          retry_count?: number | null
          scheduled_for?: string | null
          status?: Database["public"]["Enums"]["jobstatus"]
          updated_at?: string
        }
        Relationships: []
      }
      purchase: {
        Row: {
          amount_cents: number | null
          course_id: number | null
          created_at: string
          id: number
          order_no: string | null
          status: string | null
          updated_at: string
          user_id: number | null
        }
        Insert: {
          amount_cents?: number | null
          course_id?: number | null
          created_at: string
          id?: number
          order_no?: string | null
          status?: string | null
          updated_at: string
          user_id?: number | null
        }
        Update: {
          amount_cents?: number | null
          course_id?: number | null
          created_at?: string
          id?: number
          order_no?: string | null
          status?: string | null
          updated_at?: string
          user_id?: number | null
        }
        Relationships: []
      }
      question: {
        Row: {
          answer_md: string | null
          content_md: string | null
          content_plain: string | null
          created_at: string
          difficulty: number | null
          embedding: string | null
          id: number
          is_public: number | null
          owner_user_id: number | null
          question_type: string | null
          raw_reference: string | null
          subtopic_id: number | null
          updated_at: string
        }
        Insert: {
          answer_md?: string | null
          content_md?: string | null
          content_plain?: string | null
          created_at: string
          difficulty?: number | null
          embedding?: string | null
          id?: number
          is_public?: number | null
          owner_user_id?: number | null
          question_type?: string | null
          raw_reference?: string | null
          subtopic_id?: number | null
          updated_at: string
        }
        Update: {
          answer_md?: string | null
          content_md?: string | null
          content_plain?: string | null
          created_at?: string
          difficulty?: number | null
          embedding?: string | null
          id?: number
          is_public?: number | null
          owner_user_id?: number | null
          question_type?: string | null
          raw_reference?: string | null
          subtopic_id?: number | null
          updated_at?: string
        }
        Relationships: []
      }
      question_image: {
        Row: {
          created_at: string
          display_order: number | null
          id: number
          image_link: string | null
          question_id: number | null
          updated_at: string
        }
        Insert: {
          created_at: string
          display_order?: number | null
          id?: number
          image_link?: string | null
          question_id?: number | null
          updated_at: string
        }
        Update: {
          created_at?: string
          display_order?: number | null
          id?: number
          image_link?: string | null
          question_id?: number | null
          updated_at?: string
        }
        Relationships: []
      }
      question_issue_report: {
        Row: {
          created_at: string
          description: string
          id: number
          issue_type: string
          question_id: number
          resolution_notes: string | null
          resolved_by: number | null
          status: string
          updated_at: string
          user_id: number
        }
        Insert: {
          created_at?: string
          description: string
          id?: number
          issue_type: string
          question_id: number
          resolution_notes?: string | null
          resolved_by?: number | null
          status?: string
          updated_at?: string
          user_id: number
        }
        Update: {
          created_at?: string
          description?: string
          id?: number
          issue_type?: string
          question_id?: number
          resolution_notes?: string | null
          resolved_by?: number | null
          status?: string
          updated_at?: string
          user_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "question_issue_report_question_id_fkey"
            columns: ["question_id"]
            isOneToOne: false
            referencedRelation: "question"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "question_issue_report_resolved_by_fkey"
            columns: ["resolved_by"]
            isOneToOne: false
            referencedRelation: "user"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "question_issue_report_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user"
            referencedColumns: ["id"]
          },
        ]
      }
      question_tag: {
        Row: {
          created_at: string
          question_id: number
          tag_id: number
          updated_at: string
        }
        Insert: {
          created_at?: string
          question_id: number
          tag_id: number
          updated_at?: string
        }
        Update: {
          created_at?: string
          question_id?: number
          tag_id?: number
          updated_at?: string
        }
        Relationships: []
      }
      question_topic_subtopic: {
        Row: {
          created_at: string
          is_primary: number | null
          question_id: number
          seq_order: number
          subtopic_id: number
          topic_id: number
          updated_at: string
        }
        Insert: {
          created_at?: string
          is_primary?: number | null
          question_id: number
          seq_order: number
          subtopic_id: number
          topic_id: number
          updated_at?: string
        }
        Update: {
          created_at?: string
          is_primary?: number | null
          question_id?: number
          seq_order?: number
          subtopic_id?: number
          topic_id?: number
          updated_at?: string
        }
        Relationships: []
      }
      subtopic: {
        Row: {
          created_at: string
          id: number
          name: string | null
          topic_id: number | null
          updated_at: string
        }
        Insert: {
          created_at: string
          id?: number
          name?: string | null
          topic_id?: number | null
          updated_at: string
        }
        Update: {
          created_at?: string
          id?: number
          name?: string | null
          topic_id?: number | null
          updated_at?: string
        }
        Relationships: []
      }
      subtopic_paper: {
        Row: {
          created_at: string
          id: number
          page_count: number | null
          pdf_size_bytes: number | null
          pdf_upload_date: string | null
          s3_pdf_key: string | null
          subtopic_id: number | null
          title: string | null
          updated_at: string
          version: number | null
        }
        Insert: {
          created_at: string
          id?: number
          page_count?: number | null
          pdf_size_bytes?: number | null
          pdf_upload_date?: string | null
          s3_pdf_key?: string | null
          subtopic_id?: number | null
          title?: string | null
          updated_at: string
          version?: number | null
        }
        Update: {
          created_at?: string
          id?: number
          page_count?: number | null
          pdf_size_bytes?: number | null
          pdf_upload_date?: string | null
          s3_pdf_key?: string | null
          subtopic_id?: number | null
          title?: string | null
          updated_at?: string
          version?: number | null
        }
        Relationships: []
      }
      tag: {
        Row: {
          created_at: string
          id: number
          name: string | null
          updated_at: string
        }
        Insert: {
          created_at: string
          id?: number
          name?: string | null
          updated_at: string
        }
        Update: {
          created_at?: string
          id?: number
          name?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      topic: {
        Row: {
          course_id: number | null
          created_at: string
          id: number
          name: string | null
          sort_order: number | null
          updated_at: string
        }
        Insert: {
          course_id?: number | null
          created_at: string
          id?: number
          name?: string | null
          sort_order?: number | null
          updated_at: string
        }
        Update: {
          course_id?: number | null
          created_at?: string
          id?: number
          name?: string | null
          sort_order?: number | null
          updated_at?: string
        }
        Relationships: []
      }
      upload_job: {
        Row: {
          completed_at: string | null
          created_at: string
          error_message: string | null
          failed_at: string | null
          file_size: number
          file_type: string
          filename: string
          id: number
          job_id: string
          job_type: Database["public"]["Enums"]["jobtype"]
          original_filename: string
          processing_metadata: Json | null
          processing_stages: Json | null
          questions_extracted: number | null
          queued_at: string
          result_data: Json | null
          s3_key: string | null
          started_at: string | null
          status: Database["public"]["Enums"]["jobstatus"]
          updated_at: string
          user_id: number
        }
        Insert: {
          completed_at?: string | null
          created_at: string
          error_message?: string | null
          failed_at?: string | null
          file_size: number
          file_type: string
          filename: string
          id?: number
          job_id: string
          job_type?: Database["public"]["Enums"]["jobtype"]
          original_filename: string
          processing_metadata?: Json | null
          processing_stages?: Json | null
          questions_extracted?: number | null
          queued_at: string
          result_data?: Json | null
          s3_key?: string | null
          started_at?: string | null
          status?: Database["public"]["Enums"]["jobstatus"]
          updated_at: string
          user_id: number
        }
        Update: {
          completed_at?: string | null
          created_at?: string
          error_message?: string | null
          failed_at?: string | null
          file_size?: number
          file_type?: string
          filename?: string
          id?: number
          job_id?: string
          job_type?: Database["public"]["Enums"]["jobtype"]
          original_filename?: string
          processing_metadata?: Json | null
          processing_stages?: Json | null
          questions_extracted?: number | null
          queued_at?: string
          result_data?: Json | null
          s3_key?: string | null
          started_at?: string | null
          status?: Database["public"]["Enums"]["jobstatus"]
          updated_at?: string
          user_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "upload_job_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user"
            referencedColumns: ["id"]
          },
        ]
      }
      user: {
        Row: {
          clerk_id: string | null
          created_at: string
          id: number
          role: string
          subscription_ends_at: string | null
          subscription_id: string | null
          updated_at: string
        }
        Insert: {
          clerk_id?: string | null
          created_at: string
          id?: number
          role?: string
          subscription_ends_at?: string | null
          subscription_id?: string | null
          updated_at: string
        }
        Update: {
          clerk_id?: string | null
          created_at?: string
          id?: number
          role?: string
          subscription_ends_at?: string | null
          subscription_id?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      user_course_access: {
        Row: {
          course_id: number
          created_at: string
          granted_at: string | null
          updated_at: string
          user_id: number
        }
        Insert: {
          course_id: number
          created_at?: string
          granted_at?: string | null
          updated_at?: string
          user_id: number
        }
        Update: {
          course_id?: number
          created_at?: string
          granted_at?: string | null
          updated_at?: string
          user_id?: number
        }
        Relationships: []
      }
      user_institution: {
        Row: {
          created_at: string
          id: number
          institution_id: number | null
          role: string | null
          updated_at: string
          user_id: number | null
        }
        Insert: {
          created_at: string
          id?: number
          institution_id?: number | null
          role?: string | null
          updated_at: string
          user_id?: number | null
        }
        Update: {
          created_at?: string
          id?: number
          institution_id?: number | null
          role?: string | null
          updated_at?: string
          user_id?: number | null
        }
        Relationships: []
      }
      user_quota_log: {
        Row: {
          action: string
          amount: number | null
          created_at: string
          daily_limit: number
          id: number
          ip_address: string | null
          related_job_id: string | null
          remaining_quota: number
          resource_type: string
          updated_at: string
          user_agent: string | null
          user_id: number
        }
        Insert: {
          action: string
          amount?: number | null
          created_at: string
          daily_limit: number
          id?: number
          ip_address?: string | null
          related_job_id?: string | null
          remaining_quota: number
          resource_type: string
          updated_at: string
          user_agent?: string | null
          user_id: number
        }
        Update: {
          action?: string
          amount?: number | null
          created_at?: string
          daily_limit?: number
          id?: number
          ip_address?: string | null
          related_job_id?: string | null
          remaining_quota?: number
          resource_type?: string
          updated_at?: string
          user_agent?: string | null
          user_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "user_quota_log_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user"
            referencedColumns: ["id"]
          },
        ]
      }
      user_usage_log: {
        Row: {
          action_type: Database["public"]["Enums"]["usageactiontype"]
          context_data: string | null
          created_at: string
          id: number
          month_year: string | null
          resource_id: number | null
          resource_type: string | null
          updated_at: string
          user_id: number
        }
        Insert: {
          action_type: Database["public"]["Enums"]["usageactiontype"]
          context_data?: string | null
          created_at: string
          id?: number
          month_year?: string | null
          resource_id?: number | null
          resource_type?: string | null
          updated_at: string
          user_id: number
        }
        Update: {
          action_type?: Database["public"]["Enums"]["usageactiontype"]
          context_data?: string | null
          created_at?: string
          id?: number
          month_year?: string | null
          resource_id?: number | null
          resource_type?: string | null
          updated_at?: string
          user_id?: number
        }
        Relationships: []
      }
      users: {
        Row: {
          clerk_user_id: string | null
          created_at: string
          email: string | null
          id: number | null
          updated_at: string
        }
        Insert: {
          clerk_user_id?: string | null
          created_at?: string
          email?: string | null
          id?: number | null
          updated_at?: string
        }
        Update: {
          clerk_user_id?: string | null
          created_at?: string
          email?: string | null
          id?: number | null
          updated_at?: string
        }
        Relationships: []
      }
      wechat_users: {
        Row: {
          avatar: string | null
          created_at: string
          id: number | null
          nickname: string | null
          openid: string
          updated_at: string
        }
        Insert: {
          avatar?: string | null
          created_at?: string
          id?: number | null
          nickname?: string | null
          openid: string
          updated_at?: string
        }
        Update: {
          avatar?: string | null
          created_at?: string
          id?: number | null
          nickname?: string | null
          openid?: string
          updated_at?: string
        }
        Relationships: []
      }
      year_paper: {
        Row: {
          course_id: number | null
          created_at: string
          id: number
          paper_number: number | null
          pdf_page_count: number | null
          pdf_size_bytes: number | null
          pdf_upload_date: string | null
          s3_pdf_key: string | null
          session: string | null
          updated_at: string
          version: number | null
          year: number | null
        }
        Insert: {
          course_id?: number | null
          created_at: string
          id?: number
          paper_number?: number | null
          pdf_page_count?: number | null
          pdf_size_bytes?: number | null
          pdf_upload_date?: string | null
          s3_pdf_key?: string | null
          session?: string | null
          updated_at: string
          version?: number | null
          year?: number | null
        }
        Update: {
          course_id?: number | null
          created_at?: string
          id?: number
          paper_number?: number | null
          pdf_page_count?: number | null
          pdf_size_bytes?: number | null
          pdf_upload_date?: string | null
          s3_pdf_key?: string | null
          session?: string | null
          updated_at?: string
          version?: number | null
          year?: number | null
        }
        Relationships: []
      }
      year_paper_question: {
        Row: {
          created_at: string
          question_id: number
          seq_no: number | null
          updated_at: string
          year_paper_id: number
        }
        Insert: {
          created_at?: string
          question_id: number
          seq_no?: number | null
          updated_at?: string
          year_paper_id: number
        }
        Update: {
          created_at?: string
          question_id?: number
          seq_no?: number | null
          updated_at?: string
          year_paper_id?: number
        }
        Relationships: []
      }
    }
    Views: {
      competition_question_details: {
        Row: {
          competition_code: string | null
          competition_id: number | null
          competition_name: string | null
          content_md: string | null
          content_plain: string | null
          difficulty_rating: number | null
          id: number | null
          problem_number: number | null
          question_id: number | null
          raw_reference: string | null
          session: string | null
          topic_category: string | null
          topic_id: number | null
          topic_level: string | null
          topic_name: string | null
          year: number | null
        }
        Relationships: [
          {
            foreignKeyName: "competition_question_question_id_fkey"
            columns: ["question_id"]
            isOneToOne: false
            referencedRelation: "question"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Functions: {
      binary_quantize: {
        Args: { "": string } | { "": unknown }
        Returns: unknown
      }
      gtrgm_compress: {
        Args: { "": unknown }
        Returns: unknown
      }
      gtrgm_decompress: {
        Args: { "": unknown }
        Returns: unknown
      }
      gtrgm_in: {
        Args: { "": unknown }
        Returns: unknown
      }
      gtrgm_options: {
        Args: { "": unknown }
        Returns: undefined
      }
      gtrgm_out: {
        Args: { "": unknown }
        Returns: unknown
      }
      halfvec_avg: {
        Args: { "": number[] }
        Returns: unknown
      }
      halfvec_out: {
        Args: { "": unknown }
        Returns: unknown
      }
      halfvec_send: {
        Args: { "": unknown }
        Returns: string
      }
      halfvec_typmod_in: {
        Args: { "": unknown[] }
        Returns: number
      }
      hnsw_bit_support: {
        Args: { "": unknown }
        Returns: unknown
      }
      hnsw_halfvec_support: {
        Args: { "": unknown }
        Returns: unknown
      }
      hnsw_sparsevec_support: {
        Args: { "": unknown }
        Returns: unknown
      }
      hnswhandler: {
        Args: { "": unknown }
        Returns: unknown
      }
      ivfflat_bit_support: {
        Args: { "": unknown }
        Returns: unknown
      }
      ivfflat_halfvec_support: {
        Args: { "": unknown }
        Returns: unknown
      }
      ivfflathandler: {
        Args: { "": unknown }
        Returns: unknown
      }
      l2_norm: {
        Args: { "": unknown } | { "": unknown }
        Returns: number
      }
      l2_normalize: {
        Args: { "": string } | { "": unknown } | { "": unknown }
        Returns: unknown
      }
      set_limit: {
        Args: { "": number }
        Returns: number
      }
      show_limit: {
        Args: Record<PropertyKey, never>
        Returns: number
      }
      show_trgm: {
        Args: { "": string }
        Returns: string[]
      }
      sparsevec_out: {
        Args: { "": unknown }
        Returns: unknown
      }
      sparsevec_send: {
        Args: { "": unknown }
        Returns: string
      }
      sparsevec_typmod_in: {
        Args: { "": unknown[] }
        Returns: number
      }
      update_competition_topic_counts: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      vector_avg: {
        Args: { "": number[] }
        Returns: string
      }
      vector_dims: {
        Args: { "": string } | { "": unknown }
        Returns: number
      }
      vector_norm: {
        Args: { "": string }
        Returns: number
      }
      vector_out: {
        Args: { "": string }
        Returns: unknown
      }
      vector_send: {
        Args: { "": string }
        Returns: string
      }
      vector_typmod_in: {
        Args: { "": unknown[] }
        Returns: number
      }
    }
    Enums: {
      genpdf_source: "COLLECTION" | "ADHOC"
      institution_role: "teacher" | "student"
      issuereportstatus: "pending" | "reviewed" | "resolved" | "rejected"
      issuetype:
        | "content-error"
        | "mathematical-notation"
        | "incorrect-answer"
        | "unclear-question"
        | "technical-issue"
        | "other"
      jobstatus:
        | "queued"
        | "started"
        | "finished"
        | "failed"
        | "deferred"
        | "scheduled"
        | "cancelled"
      jobtype:
        | "file_upload"
        | "ocr_processing"
        | "pdf_generation"
        | "content_cleaning"
        | "embedding_generation"
      purchasestatus: "PENDING" | "PAID" | "CLOSED"
      usageactiontype:
        | "QUESTION_VIEW"
        | "QUESTION_SEARCH"
        | "PDF_DOWNLOAD"
        | "PDF_GENERATION"
        | "COLLECTION_CREATE"
        | "COURSE_ACCESS"
      userrole: "FREE" | "PRO" | "INSTITUTION" | "ADMIN"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      genpdf_source: ["COLLECTION", "ADHOC"],
      institution_role: ["teacher", "student"],
      issuereportstatus: ["pending", "reviewed", "resolved", "rejected"],
      issuetype: [
        "content-error",
        "mathematical-notation",
        "incorrect-answer",
        "unclear-question",
        "technical-issue",
        "other",
      ],
      jobstatus: [
        "queued",
        "started",
        "finished",
        "failed",
        "deferred",
        "scheduled",
        "cancelled",
      ],
      jobtype: [
        "file_upload",
        "ocr_processing",
        "pdf_generation",
        "content_cleaning",
        "embedding_generation",
      ],
      purchasestatus: ["PENDING", "PAID", "CLOSED"],
      usageactiontype: [
        "QUESTION_VIEW",
        "QUESTION_SEARCH",
        "PDF_DOWNLOAD",
        "PDF_GENERATION",
        "COLLECTION_CREATE",
        "COURSE_ACCESS",
      ],
      userrole: ["FREE", "PRO", "INSTITUTION", "ADMIN"],
    },
  },
} as const
